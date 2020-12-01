#include <stdio.h>
#include <stdlib.h>

#define SZELESSEGE 71
#define MAGASSAGA 41


int main()
{

    srand(time(NULL));
    int labirint[MAGASSAGA][SZELESSEGE];
    int sor, oszlop; // tömb pointerek
    int i; // szokásos forciklus számláló
    int FoIrany = (rand()% 4)+1;  /* merre induljon? melyik legyen a fõ irány? 1-> bal, 2->fel 3->jobb, 4-> lefele
    Azért van erre szükség hogy legyen egy fõ csapásirány vagyis ne tekeredjen magába*/

    // Feltölti a tömböt 0-val, a széleket 1-gyel
    for (sor=0; sor<MAGASSAGA; sor++)
    {
        for(oszlop=0; oszlop<SZELESSEGE; oszlop++)
        {
            if (oszlop==0 || oszlop==SZELESSEGE-1 || sor==0 || sor==MAGASSAGA-1)
                labirint[sor][oszlop] = 1;
            else
                labirint[sor][oszlop] = 0;
        }
    }

    // elindul egy fal
    for(i=2;i<=999;i++)
        {
        sor=(rand()%((MAGASSAGA-2)/2))*2+2;
        oszlop=(rand()%((SZELESSEGE-2)/2))*2+2;
        int Erre_ugrik = (rand()% 4)+1;
        int balra_megy = 0;
        int jobbra_megy = 0;
        int fel_megy = 0;
        int le_megy = 0;
        switch(Erre_ugrik)
        {
        case 1: //inkább balra
            balra_megy = 70;
            fel_megy = 80;
            jobbra_megy = 90;
            le_megy = 100;
            break;
        case 2: //inkább felmegy
            balra_megy = 10;
            fel_megy = 80;
            jobbra_megy = 90;
            le_megy = 100;
            break;
        case 3: //inkább jobbra
            balra_megy = 10;
            fel_megy = 20;
            jobbra_megy = 90;
            le_megy = 100;
            break;
        case 4: //inkább le
            balra_megy = 10;
            fel_megy = 20;
            jobbra_megy = 90;
            le_megy = 100;

            break;
        }
        while(labirint[sor][oszlop] == 0 || labirint[sor][oszlop] == i )
        //while(labirint[sor][oszlop] == 0)
        {
            if(labirint[sor-2][oszlop] == i && labirint[sor+2][oszlop] ==i && labirint[sor][oszlop-2] ==i && labirint[sor][oszlop+2] ==i)
            {
                for (sor=0; sor<MAGASSAGA; sor++)
                {
                    for(oszlop=0; oszlop<SZELESSEGE; oszlop++)
                    {
                        if (labirint[sor][oszlop] == i)
                            labirint[sor][oszlop] = 0;
                    }
                }
                break;
            }
            int Erre_ugrik_szazalek = (rand()% 100)+1;
            if(Erre_ugrik_szazalek<balra_megy && labirint[sor][oszlop-2] != i )//balra
            {
                labirint[sor][oszlop] = i;
                oszlop--;
                labirint[sor][oszlop] = i;
                oszlop--;
            }
            else if (Erre_ugrik_szazalek<fel_megy && labirint[sor-2][oszlop] != i)//fel
            {
                labirint[sor][oszlop] = i;
                sor--;
                labirint[sor][oszlop] = i;
                sor--;
            }
            else if (Erre_ugrik_szazalek<jobbra_megy && labirint[sor][oszlop+2] != i ) //jobbra
            {
                labirint[sor][oszlop] = i;
                oszlop++;
                labirint[sor][oszlop] = i;
                oszlop++;
            }
            else if (Erre_ugrik_szazalek<le_megy &&labirint[sor+2][oszlop] != i ) // lefele
            {
                labirint[sor][oszlop] = i;
                sor++;
                labirint[sor][oszlop] = i;
                sor++;
            }
        }
    }
    // feltölti a hiányokat

    int Erre_ugrik = (rand()% 4)+1;
    for (sor=2; sor<MAGASSAGA; sor=sor+2)
    {
        for(oszlop=2; oszlop<SZELESSEGE; oszlop=oszlop+2)
        {
            if (labirint[sor][oszlop] == 0)
            {
                Erre_ugrik = (Erre_ugrik%4)+1;
                switch(Erre_ugrik)
                {
                case 1: //balra
                    for(int i=0;labirint[sor][oszlop-i] == 0; i--)
                    {
                        labirint[sor][oszlop-i] = 1;
                        //break;
                    }
                    break;
                case 2: //felmegy
                    for(int i=0;labirint[sor-i][oszlop] == 0; i--)
                    {
                        labirint[sor-i][oszlop] = 1;
                        //break;
                    }
                    break;
                case 3: //jobbra
                    for(int i=0;labirint[sor][oszlop+i] == 0; i++)
                    {
                        labirint[sor][oszlop+i] = 1;
                        //break;
                    }
                    break;
                case 4: //le
                    for(int i=0;labirint[sor+i][oszlop] == 0; i++)
                    {
                        labirint[sor+i][oszlop] = 1;
                        //break;
                    }
                    break;
                }


                labirint[sor][oszlop]=1;

            }
        }
    }

    // kirajzo
    for (sor=0; sor<MAGASSAGA; sor++)
    {
        for(oszlop=0; oszlop<SZELESSEGE; oszlop++)
        {
            if (labirint[sor][oszlop] != 0)
                //printf("%d",labirint[sor][oszlop]);
                printf("X");

            else
                printf(" ");
        }
        printf("\n");
    }
    printf("\n");

    //kirajz_labirint()
}
