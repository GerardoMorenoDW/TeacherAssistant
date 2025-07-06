import { Injectable } from '@nestjs/common';
import { CohereClient } from 'cohere-ai';
import * as dotenv from 'dotenv';
dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

@Injectable()
export class IaService {
  async generarActividad(actividad: string) {
    const prompt = `
        Eres un generador de actividades educativas para profesores de primaria. 
        Deacuerdo con la siguiente solicitud:
        ${actividad}
        Responde con una o mas actividades estructuradas en este formato:

        Título:
        Grado:
        Tema:
        Objetivo:
        Instrucciones:
        Ejercicio:
    `;

    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt,
      maxTokens: 600,
      temperature: 0.7,
    });
    const texto = {
        respuesta: response.generations[0].text.trim()
    }

    try {
      const json = texto;
      console.log(json)
      return json;
    } catch (error) {
      console.error('Error al parsear JSON:', texto);
      throw new Error('La respuesta no es un JSON válido.');
    }
  }

  async generarTest(solicitud: string) {
    const prompt = `
        Eres un generador de actividades educativas para profesores de primaria. 
        Deacuerdo con la siguiente solicitud:
        ${solicitud}
        Responde con una o mas actividades estructuradas en este formato:

        Título:
        Grado:
        Tema:
        Objetivo:
        Instrucciones:
        Ejercicio:
    `;

    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt,
      maxTokens: 600,
      temperature: 0.7,
    });
    const texto = {
        respuesta: response.generations[0].text.trim()
    }

    try {
      const json = texto;
      console.log(json)
      return json;
    } catch (error) {
      console.error('Error al parsear JSON:', texto);
      throw new Error('La respuesta no es un JSON válido.');
    }
  }
}
