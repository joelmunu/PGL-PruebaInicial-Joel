import { useState } from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
const Form = (props) => {

    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };

    const sendForm = (e) => {
        e.preventDefault();
    
        const newTask = {
          id: uuidv4(),
          taskText: input,
          finished: false
        };
    
        console.log(newTask);
    
        props.onSubmit(newTask);
    };

  return (
    <div>
        <form onSubmit={sendForm}>
            <input type="text" name="task" id="task" onChange={handleInputChange}/>
            <button>Add</button>
        </form>
    </div>
  );
};

Form.propTypes = {
    onSubmit: PropTypes.func
  };

export default Form;