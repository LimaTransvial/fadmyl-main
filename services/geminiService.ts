import { GoogleGenAI } from "@google/genai";
import { MODELS } from '../constants';

// Initialize the Gemini API client
// Note: In a real production app, ensure NEXT_PUBLIC_GEMINI_API_KEY is set in environment variables
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRecommendation = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Para utilizar el asistente de IA, por favor configure la clave API.";
  }

  const modelCatalog = MODELS.map(m => `${m.name} (${m.category}): ${m.description} - Ideal para: ${m.features.join(', ')}`).join('\n');

  const prompt = `
    Eres un experto asesor de ventas para "FADMYL", una empresa de soluciones inteligentes y módulos habitacionales en Catamarca, Argentina.
    
    Nuestro catálogo es:
    ${modelCatalog}
    
    El cliente pregunta: "${userQuery}"
    
    Tu tarea:
    1. Recomienda el MEJOR modelo basado en su necesidad (minería, turismo, vivienda, etc.).
    2. Explica por qué brevemente.
    3. NO menciones precios.
    4. Sé amable, profesional, moderno y enfatiza la "inteligencia" y eficiencia de nuestras soluciones.
    5. Mantén la respuesta en menos de 100 palabras.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Disculpa, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Lo siento, hubo un error conectando con el asistente inteligente. Por favor contacta a Esteban Colombo directamente.";
  }
};