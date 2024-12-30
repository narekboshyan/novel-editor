import { Editor } from "@tiptap/core";

interface SlashCommand {
  title: string;
  description: string;
  icon: string;
  command: ({ editor }: { editor: Editor }) => void;
}

export const slashCommands: SlashCommand[] = [
  {
    title: "Text",
    description: "Just start writing with plain text",
    icon: "📝",
    command: ({ editor }) => {
      editor.chain().focus().setParagraph().run();
    },
  },
  {
    title: "Heading 1",
    description: "Large section heading",
    icon: "H1",
    command: ({ editor }) => {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    },
  },
  {
    title: "Heading 2",
    description: "Medium section heading",
    icon: "H2",
    command: ({ editor }) => {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    },
  },
  {
    title: "Bullet List",
    description: "Create a simple bullet list",
    icon: "•",
    command: ({ editor }) => {
      editor.chain().focus().toggleBulletList().run();
    },
  },
  {
    title: "Numbered List",
    description: "Create a numbered list",
    icon: "1.",
    command: ({ editor }) => {
      editor.chain().focus().toggleOrderedList().run();
    },
  },
  {
    title: "Quote",
    description: "Capture a quotation",
    icon: '"',
    command: ({ editor }) => {
      editor.chain().focus().toggleBlockquote().run();
    },
  },
  {
    title: "Code",
    description: "Capture a code snippet",
    icon: "</>",
    command: ({ editor }) => {
      editor.chain().focus().toggleCodeBlock().run();
    },
  },
  {
    title: "AI Complete",
    description: "Complete text using AI",
    icon: "🤖",
    command: () => {}, // Handled in component
  },
  {
    title: "Upload Image",
    description: "Upload an image",
    icon: "🖼️",
    command: () => {}, // Handled in component
  },
  {
    title: "YouTube",
    description: "Embed a YouTube video",
    icon: "▶️",
    command: () => {}, // Handled in component
  },
  {
    title: "Twitter",
    description: "Embed a Tweet",
    icon: "🐦",
    command: () => {}, // Handled in component
  },
];
