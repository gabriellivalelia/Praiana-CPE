#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
    {
        setbuf(stdin, NULL);
        int i, j, x, y; //variáveis auxiliares para capturar o tabuleiro e as jogadas com base nas coordenadas da matriz
        int k, Jogos, Jogadas; //k é o tamanho dos lados da matriz, Jogos é a quantidade de jogos a serem realizados e Jogadas a quantidade de jogadas a serem feitas
        //era possível declarar todas as variáveis de tipo inteiro em uma única linha, mas eu preferi separar as auxiliares das comuns
        char tabuleiro[k][k]; //matriz que representa o tabuleiro
        while (1) //esse while True garante que o usuário seja incapaz de colocar um valor de número de jogos menor do que 1 ou maior do que 10
            {
                scanf("%d", &Jogos);
                if (1 <= Jogos && Jogos <= 10) //captura a quantidade de jogos a serem feitos
                        break;
            }
        while (Jogos > 0) //enquanto não forem terminados todos os jogos, o código continuará rodando
            {
                while (1) //esse while True garante que o usuário seja incapaz de colocar um valor de tamanho de lado menor do que 2 ou maior do que 100
                    {
                        scanf("%d", &k);
                        if (1 < k && k < 101) //captura o tamanho dos lados da matriz tabuleiro
                        break;
                    }
                for (i = 0; i < k; i++)
                    {
                        for (j = 0; j < k; j++)
                            {
                                scanf(" %c", &tabuleiro[i][j]); //captura a matriz tabuleiro
                                printf("\n->%c\n", tabuleiro[i][j]);
                            }
                    }
                scanf("%d", &Jogadas); //captura o número de jogadas a serem feitas
                while (Jogadas > 0) //enquanto não forem usadas todas as jogadas, o jogo não termina
                    {
                        setbuf(stdin, NULL);
                        scanf("%d %d", &x, &y);
                        printf("\n%c %d %d\n", tabuleiro[x][y], x, y);
                        if (tabuleiro[x][y] == 'b') //checa se a jogada foi feita escolhendo uma bomba
                            {
                                printf("PERDEU");
                                break;
                            }
                        if (tabuleiro[x][y] == 'x') //checa se a jogada foi feita escolhendo uma casa ainda não selecionada
                            {
                                if (tabuleiro[x-1][y-1] == 'b' || tabuleiro[x-1][y] == 'b' || tabuleiro[x-1][y+1] == 'b' || tabuleiro[x][y+1] == 'b' || tabuleiro[x+1][y+1] == 'b' || tabuleiro[x+1][y] == 'b' || tabuleiro[x+1][y-1] == 'b' || tabuleiro[x][y-1] == 'b') //checa se há uma bomba nos arredores da casa selecionada
                                    {
                                        tabuleiro[x][y] = 's'; //"s" de "selecionado"
                                    }
                            }
                        Jogadas --; //a cada jogada feita, o número de jogadas disponíveis diminui em 1 unidade
                    }
                Jogos --; //a cada jogo terminado, o número de jogos a serem realizados diminui em 1 unidade
            }
        return 0;
    }