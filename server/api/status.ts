import type { ServerRequest } from '..';

const status: ServerRequest = async (req, res) => {
  return 'Server is up and running';
};

export default status;
