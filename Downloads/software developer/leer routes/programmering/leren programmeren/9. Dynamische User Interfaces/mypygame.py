import pygame

# initialisatie
pygame.init()
WIDTH, HEIGHT = 600, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Mens Erger Je Niet")

# kleuren
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# bord
board = pygame.image.load('board.png')

# pionnen
red_pawn = pygame.image.load('red_pawn.png')
green_pawn = pygame.image.load('green_pawn.png')
blue_pawn = pygame.image.load('blue_pawn.png')
yellow_pawn = pygame.image.load('yellow_pawn.png')

# spelbord coördinaten
BOARD_X, BOARD_Y = 50, 50

# pionnen startposities
RED_X, RED_Y = 300, 550
GREEN_X, GREEN_Y = 350, 550
BLUE_X, BLUE_Y = 300, 500
YELLOW_X, YELLOW_Y = 350, 500

# pion grootte
PAWN_SIZE = 40

# pion positie lijsten
RED_POS = [RED_X, RED_Y]
GREEN_POS = [GREEN_X, GREEN_Y]
BLUE_POS = [BLUE_X, BLUE_Y]
YELLOW_POS = [YELLOW_X, YELLOW_Y]

# spel lus
running = True
while running:
    # event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # scherm vullen
    screen.fill(WHITE)
    
    # bord tekenen
    screen.blit(board, (BOARD_X, BOARD_Y))
    
    # pionnen tekenen
    screen.blit(red_pawn, (RED_POS[0], RED_POS[1]))
    screen.blit(green_pawn, (GREEN_POS[0], GREEN_POS[1]))
    screen.blit(blue_pawn, (BLUE_POS[0], BLUE_POS[1]))
    screen.blit(yellow_pawn, (YELLOW_POS[0], YELLOW_POS[1]))
    
    # scherm updaten
    pygame.display.update()

# afsluiten
pygame.quit()