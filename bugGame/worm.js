class Worm {
    constructor() {
        this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
        this.dir = 'ArrowUp';
        this.dirNext = 'ArrowUp';
    }
    
    renderWorm() {
        this.wormBody.forEach( (item) => {
            item.renderTile();
        }) 
    }

    // worm간의 충돌 체크
    collisionCheck(wormHead) {
        const leftEdge = (wormHead.col === 0);
        const topEdge =(wormHead.row === 0);
        const rightEdge =(wormHead.col === tileWidth - 1); // 충돌했을 때 한 칸 더 가는걸 방지한다.
        const downEdge =(wormHead.row === tileHeight - 1);
        const collisionEdge = leftEdge || topEdge || rightEdge || downEdge;

        let collisionBody;
        this.wormBody.forEach( (item) => {
            if (wormHead.collisionCheck(item)) {
                collisionBody = true;
            }
        })

        return collisionEdge || collisionBody;
    }


    // worm 이동 함수
    moveWorm() {
        const head = this.wormBody[0];
        
        // 이동에 따른 벌레의 새로운 머리
        let newHead;

        this.dir = this.dirNext;
        
        if (this.dir === "ArrowRight") {
            newHead = new Tile(head.col + 1, head.row); // 열은 그대로 
        } else if (this.dir ==="ArrowDown") {
            newHead = new Tile(head.col, head.row + 1); 
        } else if (this.dir ==="ArrowLeft") {
            newHead = new Tile(head.col - 1, head.row); 
        } else if (this.dir ==="ArrowUp") {
            newHead = new Tile(head.col, head.row - 1); 
        }

        // 머리가 충돌하면 게임 오버
        if (this.collisionCheck(newHead)) {
            renderGameOver();
        }

        this.wormBody.unshift(newHead);

        // bug 먹는 로직
        if (newHead.collisionCheck(bug.pos)) {
            ctxBg.clearRect(0, 0, cWidth, cHeight);
            score++;
            bug.moveBug();
        } else {
            this.wormBody.pop();
        }
    }

    checkDirection(dirKey) {
        // 예외처리
        if (this.dir === "ArrowRight" && dirKey === "ArrowLeft") {
            return; 
        } else if (this.dir === "ArrowDown" && dirKey === "ArrowUp") {
            return; 
        } else if (this.dir === "ArrowLeft" && dirKey === "ArrowRight") {
            return; 
        } else if (this.dir === "ArrowUp" && dirKey === "ArrowDown") {
            return; 
        }

        this.dirNext = dirKey;
    }
}