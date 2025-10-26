let notes = [];

function displayNotes() {
  const notesList = document.getElementById('notesList');
    
  if (notes.length === 0) {
    notesList.innerHTML = '<div style="color: #666; text-align: center; padding: 20px;">No notes saved yet</div>';
    return;
  }

  notesList.innerHTML = notes.map(note => `
    <div class="note-item">
    <div class="note-timestamp">${note.timestamp}</div>
      <div>${note.text}</div>
    </div>
  `).join('');
}

// Add keyboard shortcut for saving (Ctrl/Cmd + Enter)
document.getElementById('noteText').addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    saveNote();
  }
});
