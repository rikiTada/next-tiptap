import React from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { Button } from '@/components/ui/button'


type MenuBarProps = {
  editor: Editor | null
}

const MenuBar = ({ editor }:MenuBarProps) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex gap-2'>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        太字
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        斜体
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        下線
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        箇条書き
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        番号付きリスト
      </Button>
    </div>
  )
}

const SimpleEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: '<p>ここにテキストを入力してください。</p>',
  })

  const content = editor?.getHTML()

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      {content}
    </div>
  )
}

export default SimpleEditor