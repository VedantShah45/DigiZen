import { position, useToast } from '@chakra-ui/react'

const useShowToast = () => {
    const toast = useToast();
    const showToast = (title, description, status) => toast({
        title: `${title}`,
        description: `${description}`,
        status: `${status}`,
        duration: 9000,
        position: "bottom-right",
        isClosable: true,
    });
    return showToast;
}

export default useShowToast
