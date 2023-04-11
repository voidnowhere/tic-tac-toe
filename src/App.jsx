import {Center, Container, Heading} from "@chakra-ui/react";
import Board from "./components/Board.jsx";

function App() {
    return (
        <Container>
            <Center>
                <Heading mt={50} fontSize={75}>Tic Tac Toe</Heading>
            </Center>
            <Board/>
        </Container>
    )
}

export default App
