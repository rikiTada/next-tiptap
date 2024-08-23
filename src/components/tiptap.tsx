"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import MenuBar from "@/components/menubar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>ここにテキストを入力してください。</p>",
  });

  const content = editor?.getHTML();

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      {content}
    </div>
  );
};

export default Tiptap;
