import { Button, Container, HStack, VStack, Input } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={"full"} justifyContent={"center"}>
            <AiOutlineCloudUpload size={'10vmax'} />

            <form>
                <HStack>
                    <Input  required type="file" css={{
                        '&::file-selector-button':{
                            border:'none',
                            width:'cacl(100% + 3px)',
                            height: '100%',
                            marginLeft:'-18px',
                            color:'purple',
                            cursor:'pointer',
                            backgroundColor:'white',
                        },
                    }} />
                    <Button colorScheme={'purple'} type='submit'>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload
