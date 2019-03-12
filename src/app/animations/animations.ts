import { animate, animation, keyframes, style } from '@angular/animations';

export const anim = {
  moveFromRight: animation([
    animate('{{ time }}ms cubic-bezier(.12,1.43,.85,1.12)', keyframes([
      style({
        opacity: 0,
        transform: 'translateX({{ right }}px)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: '*',
        offset: 1
      })
    ]))
  ],
    { params: {time: 1000, right: 200}}
  ),
  moveFromLeft: animation([
    animate('{{ time }}ms cubic-bezier(.12,1.43,.85,1.12)', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-{{ left }}px)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: '*',
        offset: 1
      })
    ]))
  ],
    { params: { time: 1000, left: 200 } }
  ),
  moveToStart: animation([
    animate('{{ time }}ms cubic-bezier(.12,1.43,.85,1.12)', keyframes([
      style({
        opacity: 1,
        transform: '*',
        offset: 0
      }),
      style({
        opacity: 0,
        transform: 'translateX(0px)',
        offset: 1
      })
    ]))
  ],
    { params: { time: 1000 } }
  ),
  blurFilter: animation([
    animate('{{ time }}ms cubic-bezier(0.2, 1, 0.2, 1)', keyframes([
      style({
        opacity: 0,
        filter: 'blur(400px)',
        offset: 0
      }),
      style({
        opacity: 1,
        filter: 'none',
        offset: 1
      })
    ]))
  ],
    { params: { time: 1000 } }
  )
}
