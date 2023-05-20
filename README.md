<<<<<<< HEAD
# DTMoney
=======
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

# COMANDO PARA MESCLAR BRANCHS *Erro fatal: refusing to merge unrelated histories"
# Na branch principal ou alvo

git pull origin merge <nome da branch secundária> --allow-unrelated-histories

>>>>>>> 98727a8113a16e7de46097df16171eb77b65ed9e
