// Code Keypad Component Here

function Keypad (){
    function handleChange(event) {
        event.preventDefault();
        console.log('Entering password...');
      }

    return (
    <div>
      <input onChange={handleChange} type="password" name="password" placeholder="Enter password..." />
    </div>
    );
}

export default Keypad;