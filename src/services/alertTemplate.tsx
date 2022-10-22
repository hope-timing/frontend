export const AlertTemplate = ({ style, options, message, close }: any) => (
  <div style={style}>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
    <button onClick={close}>X</button>
  </div>
);
