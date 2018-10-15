import { response } from "../response";

const defaultResponse = { data: response };

export default {
  get: jest.fn(() => Promise.resolve(defaultResponse))
};
