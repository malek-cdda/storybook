// import fetch from 'node-fetch';

import { Todo } from './Todo';
 
export default {
    title:'Todo/Todo',
  component: Todo,
 
};

export const Primary = {
    render: (args, { loaded: { todo } }) => <Todo titlssse="oke boss" {...todo} />,
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};