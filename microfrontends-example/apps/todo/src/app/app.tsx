import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div
        style={{ backgroundColor: 'red', width: '500px', height: '500px' }}
      ></div>
    </StyledApp>
  );
}

export default App;
