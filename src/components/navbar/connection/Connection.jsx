import { Button } from '@mantine/core';
import { useState } from "react";

export default function Connection(props) {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <Button variant='subtle' color="dark" style={{}} className="button">
            SIGN IN
        </Button>
    )
}