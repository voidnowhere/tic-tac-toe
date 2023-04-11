import {Center, Grid, GridItem, Heading, Square, useToast} from "@chakra-ui/react";
import {useState} from "react";

export default function Board() {
    const toast = useToast()
    //
    const squareSize = 100;
    const squareBorderWidth = 2;
    const borderRadius = 10;
    const fontSize = 50;
    //
    const [player, setPlayer] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    function handleClick(index) {
        if (winner !== null) {
            return;
        }
        if (board[index] !== null) {
            toast({
                title: 'Already chossen',
                status: 'error',
                isClosable: true,
            });
            return;
        }
        const newBoard = [...board];
        newBoard[index] = player;
        if (
            (newBoard[0] === player && newBoard[1] === player && newBoard[2] === player)
            ||
            (newBoard[3] === player && newBoard[4] === player && newBoard[5] === player)
            ||
            (newBoard[6] === player && newBoard[7] === player && newBoard[8] === player)
            ||
            (newBoard[0] === player && newBoard[3] === player && newBoard[6] === player)
            ||
            (newBoard[1] === player && newBoard[4] === player && newBoard[7] === player)
            ||
            (newBoard[2] === player && newBoard[5] === player && newBoard[8] === player)
            ||
            (newBoard[0] === player && newBoard[4] === player && newBoard[8] === player)
            ||
            (newBoard[2] === player && newBoard[4] === player && newBoard[6] === player)
        ) {
            setWinner(player);
            toast({
                title: `The winner is ${player}`,
                status: 'success',
                isClosable: true,
            });
        }
        setBoard(newBoard);
        setPlayer((player === 'X') ? 'O' : 'X');
    }

    return (
        <>
            <Center mt={25}>
                <Heading>Turn of {player}</Heading>
            </Center>
            <Center mt="50">
                <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                borderTopLeftRadius={borderRadius}
                                onClick={() => handleClick(0)}>
                            {board[0]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                onClick={() => handleClick(1)}>
                            {board[1]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                borderTopRightRadius={borderRadius}
                                onClick={() => handleClick(2)}>
                            {board[2]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                onClick={() => handleClick(3)}>
                            {board[3]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                onClick={() => handleClick(4)}>
                            {board[4]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                onClick={() => handleClick(5)}>
                            {board[5]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                borderBottomStartRadius={borderRadius}
                                onClick={() => handleClick(6)}>
                            {board[6]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                onClick={() => handleClick(7)}>
                            {board[7]}
                        </Square>
                    </GridItem>
                    <GridItem>
                        <Square cursor="pointer" size={squareSize}
                                fontSize={fontSize}
                                borderWidth={squareBorderWidth}
                                borderBottomEndRadius={borderRadius}
                                onClick={() => handleClick(8)}>
                            {board[8]}
                        </Square>
                    </GridItem>
                </Grid>
            </Center>
        </>
    )
}