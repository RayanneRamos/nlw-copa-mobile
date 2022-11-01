import { Center, Text } from 'native-base';
import { Loading } from '../components/Loading';

export function SignIn() {
  return (
    <Center flex={1} bgColor='gray.900' fontFamily='heading'>
        <Text color='white' fontSize={24}>
          Sign In
        </Text>
     </Center>
  );
}
