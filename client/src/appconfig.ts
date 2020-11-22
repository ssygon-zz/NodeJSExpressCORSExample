export interface AppConfiguration {
  APIEndpointDomainName: string;
  APIEndpointPort: number;
  getAPIEndpointFullPath: () => string;
}

const defaultAppConfiguration: AppConfiguration = {
  APIEndpointDomainName: `http://localhost`,
  APIEndpointPort: 4000,
  getAPIEndpointFullPath: () => {
    return `${defaultAppConfiguration.APIEndpointDomainName}:${defaultAppConfiguration.APIEndpointPort}`;
  }
};

declare const AppConfiguration: AppConfiguration;

export default defaultAppConfiguration;
