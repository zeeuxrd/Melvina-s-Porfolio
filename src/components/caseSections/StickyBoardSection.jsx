import React from 'react'

export default function StickyBoardSection({ sec, stickyPos = {}, drag = null, zIndices = {}, onStickyDown }) {
  return (
    <div className="research-sticky-board">
      {sec.stickyNotes.map((note, noteIdx) => {
        const id = `sticky-${noteIdx}`
        const pos = stickyPos[id] || { x: 0, y: 0 }
        return (
        <div
          key={noteIdx}
          className={`research-sticky sticky-${note.type} ${drag && drag.id === id ? 'is-dragging' : ''}`}
          onMouseDown={onStickyDown(id)}
          onTouchStart={onStickyDown(id)}
          style={{
            '--sx': `${pos.x}px`,
            '--sy': `${pos.y}px`,
            ...(zIndices[id] ? { zIndex: zIndices[id] } : {}),
          }}
        >
          {note.type === 'terracotta' && (
            <div className="sticky-holes">
              <span className="hole" />
              <span className="hole" />
              <span className="hole" />
              <span className="hole" />
            </div>
          )}
          {note.type === 'yellow' && <div className="pin-accent" />}
          {note.type === 'pink' && <div className="tape-accent" />}

          <span className={`sticky-tag ${note.type !== 'terracotta' ? `${note.type}-tag` : ''}`}>
            {note.tag}
          </span>

          {note.checklist ? (
            <ul className="sticky-checklist">
              {note.checklist.map((item, itemIdx) => (
                <li key={itemIdx} style={{ '--type-i': itemIdx }}>{item}</li>
              ))}
            </ul>
          ) : (
            <p
              className={
                note.type === 'pink'
                  ? 'sticky-text-bold'
                  : note.type === 'lilac'
                  ? 'sticky-lilac-text'
                  : note.type === 'mint'
                  ? 'sticky-mint-text'
                  : 'sticky-text'
              }
            >
              {note.lines.map((line, lineIdx) => (
                <span key={lineIdx} className="sticky-line" style={{ '--type-i': lineIdx }}>
                  {line}
                </span>
              ))}
            </p>
          )}

          {note.type === 'pink' && <div className="sticky-fold" />}
        </div>
        )
      })}
    </div>
  )
}
