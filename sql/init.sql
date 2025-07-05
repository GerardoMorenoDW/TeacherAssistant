-- Usuarios del sistema
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  rol TEXT DEFAULT 'usuario', -- 'usuario' | 'admin'
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chatbots creados por usuarios
CREATE TABLE IF NOT EXISTS chatbots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  lenguaje TEXT DEFAULT 'es',
  temperatura FLOAT DEFAULT 0.7,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Configuración avanzada del bot (estilo, tono, etc.)
CREATE TABLE IF NOT EXISTS bot_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chatbot_id UUID REFERENCES chatbots(id) ON DELETE CASCADE,
  tono TEXT DEFAULT 'formal',       -- informal, profesional, amigable
  rol_personalizado TEXT,           -- "Actúa como un agente de seguros"
  conocimiento_base TEXT,           -- texto cargado por el usuario
  activo BOOLEAN DEFAULT TRUE,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Conversaciones del bot
CREATE TABLE IF NOT EXISTS conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chatbot_id UUID REFERENCES chatbots(id) ON DELETE CASCADE,
  mensaje_usuario TEXT NOT NULL,
  respuesta_bot TEXT NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Logs técnicos de mensajes procesados
CREATE TABLE IF NOT EXISTS logs_mensajes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chatbot_id UUID REFERENCES chatbots(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL, -- 'error', 'info', 'warning'
  detalle TEXT,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
