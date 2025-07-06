import React, { useState } from 'react';

interface Mensaje {
  id: number;
  origen: 'usuario' | 'bot';
  texto: string;
}

const ChatActividades = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { id: 1, origen: 'bot', texto: '¡Hola! ¿En qué puedo ayudarte hoy?' },
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviarMensaje = async () => {
    if (!nuevoMensaje.trim()) return;

    const mensajeUsuario: Mensaje = {
      id: Date.now(),
      origen: 'usuario',
      texto: nuevoMensaje,
    };

    setMensajes((prev) => [...prev, mensajeUsuario]);
    setNuevoMensaje('');
    setCargando(true);

    try {
      const res = await fetch('http://localhost:5000/ia/actividad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: nuevoMensaje }),
      });

      const data = await res.json();

       const respuestaBot: Mensaje = {
        id: Date.now() + 1,
        origen: 'bot',
        texto: data.respuesta,
      };

      setMensajes((prev) => [...prev, respuestaBot]);
    } catch (error) {
      console.error('Error al obtener respuesta de IA:', error);
      setMensajes((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          origen: 'bot',
          texto: 'Ocurrió un error al procesar tu mensaje.',
        },
      ]);
    } finally {
      setCargando(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') enviarMensaje();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 text-lg font-semibold">
        Asistente de Creación de Actividades
      </header>

      {/* Mensajes */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {mensajes.map((msg) => (
          <div
            key={msg.id}
            className={`whitespace-pre-wrap max-w-xl px-4 py-2 rounded-lg shadow-md ${
              msg.origen === 'usuario'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-white text-gray-800 self-start mr-auto border'
            }`}
          >
            {msg.texto}
          </div>
        ))}
        {cargando && (
          <div className="self-start text-gray-500 italic">Escribiendo...</div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t bg-white flex gap-2">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={enviarMensaje}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={cargando}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatActividades;
