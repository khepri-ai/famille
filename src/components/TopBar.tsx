import { Menu } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-6 py-4 h-16">
      <div className="flex items-center gap-4">
        <button className="text-primary p-2 hover:bg-surface-container transition-colors rounded-full">
          <Menu size={24} />
        </button>
        <h1 className="font-headline text-2xl tracking-tight italic text-primary">La Tanière Familiale</h1>
      </div>
      <div className="flex items-center">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMb70-PkjJ-9-_Rx-wjEGxeEiruS43CIgullvVl_YziaHFsblFWCMeNbdwlQejbaQCXYfodSrUej7R6Ob0K61CUw0igJclRXCHYnQqMF_7soTzab0wtNyJ3ZkRSS2S6qN8Yq9gM8jKSv04I0gCV-lO1xmSDvBrJlbvyogg-divB-FWLg4fuMlq26ef4_ByscTOZesfgMwIB70MpSmChxGQHJkGOcS9-yyIvS6oLSXAtD4tNXxeH6wjaUYMF3E18V-np266mIdJGg"
          alt="Portrait"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
          referrerPolicy="no-referrer"
        />
      </div>
    </header>
  );
}
