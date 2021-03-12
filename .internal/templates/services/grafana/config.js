const grafana = () => {
  const retr = {};

  const serviceName = 'grafana';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "3000:3000": 'http'
      },
      modifyableEnvironment: [
        {
          key: 'GF_PATHS_DATA',
          value: '/var/lib/grafana'
        },
        {
          key: 'GF_PATHS_LOGS',
          value: '/var/log/grafana'
        }
      ],
      volumes: true,
      networks: true,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: 'https://grafana.com/', // Website of service
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: '' // Usually links to the github page for this service.
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'Grafana',
      serviceTypeTags: ['aggregator', 'wui', 'graphs', 'dashboard'],
      iconUri: '/logos/grafana.svg'
    };
  };

  return retr;
};

module.exports = grafana;
