export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button >Send</button>(without PreventDefault)
    </form>
  );
}

export function SignupDefault() {
  return (
    <form onSubmit={(e) => 
    {
        e.preventDefault()
        alert('Submitting!')}

    }>
    
      <input />
      <button >Send</button>(With PreventDefault)
    </form>
  );
}

