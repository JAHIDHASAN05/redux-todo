
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '../ui/input';

const AddTodoModal = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button className='bg-primary-gradient'>Add todo</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            defaultValue="Pedro Duarte"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  );
};

export default AddTodoModal;








// // import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
// // import React from 'react';
// import { DropdownMenuLabel } from 'node_modules/@radix-ui/react-dropdown-menu/dist';
// import { Button } from '../ui/button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/dropdown-menu';
// import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'lucide-react';
// import { DropdownMenuPortal } from '@radix-ui/react-dropdown-menu';
// // import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'lucide-react';
// // import { DropdownMenuShortcut } from '../ui/dropdown-menu';

// const AddTodoModal = () => {
//     return (
//         <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline">Open</Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56">
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <User className="mr-2 h-4 w-4" />
//               <span>Profile</span>
//               <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <CreditCard className="mr-2 h-4 w-4" />
//               <span>Billing</span>
//               <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Settings className="mr-2 h-4 w-4" />
//               <span>Settings</span>
//               <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Keyboard className="mr-2 h-4 w-4" />
//               <span>Keyboard shortcuts</span>
//               <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <Users className="mr-2 h-4 w-4" />
//               <span>Team</span>
//             </DropdownMenuItem>
//             <DropdownMenuSub>
//               <DropdownMenuSubTrigger>
//                 <UserPlus className="mr-2 h-4 w-4" />
//                 <span>Invite users</span>
//               </DropdownMenuSubTrigger>
//               <DropdownMenuPortal>
//                 <DropdownMenuSubContent>
//                   <DropdownMenuItem>
//                     <Mail className="mr-2 h-4 w-4" />
//                     <span>Email</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <MessageSquare className="mr-2 h-4 w-4" />
//                     <span>Message</span>
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>
//                     <PlusCircle className="mr-2 h-4 w-4" />
//                     <span>More...</span>
//                   </DropdownMenuItem>
//                 </DropdownMenuSubContent>
//               </DropdownMenuPortal>
//             </DropdownMenuSub>
//             <DropdownMenuItem>
//               <Plus className="mr-2 h-4 w-4" />
//               <span>New Team</span>
//               <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Github className="mr-2 h-4 w-4" />
//             <span>GitHub</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <LifeBuoy className="mr-2 h-4 w-4" />
//             <span>Support</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem disabled>
//             <Cloud className="mr-2 h-4 w-4" />
//             <span>API</span>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <LogOut className="mr-2 h-4 w-4" />
//             <span>Log out</span>
//             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
// };

// export default AddTodoModal;