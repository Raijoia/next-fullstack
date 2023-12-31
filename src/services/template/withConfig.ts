import path from 'path';
import readYamlFile from 'read-yaml-file/index';

export interface Config {
  site?: {
    title?: string;
    description?: string;
  };
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?: {
      github?: string;
      linkedin?: string;
    };
    email?: string;
    idade?: string;
  };
}

export async function withConfig(props = {}) {
  const PATH_CONFIG = path.resolve('.', 'config.yml');
  const config = await readYamlFile<Config>(PATH_CONFIG);

  return {
    config,
    ...props
  };
}
