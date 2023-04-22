import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = 'gpt-3.5-turbo';

export function OpenAIModels(model: string) {
  let maxLength = 12000;
  let tokenLimit = 4000;
  if (model == 'gpt-4') {
    maxLength = 24000;
    tokenLimit = 8000;
  } else if (model == 'gpt-4-32k') {
    maxLength = 96000;
    tokenLimit = 32000;
  }
  const m: OpenAIModel = {
    id: model,
    name: model,
    maxLength: maxLength,
    tokenLimit: tokenLimit,
  }
  return m
}

