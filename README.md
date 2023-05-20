#COMANDOS PARA INSTALAÇÃO DE DEPENDÊNCIAS
#  yarn add styled-components@^5.3.6
#  yarn add -D @types/styled-components
#  yarn add -D @types/styled-components-react-native
#  configurando arquivo tsconfig.json 

{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "types": ["react-native","styled-components-react-native"],
  },
}