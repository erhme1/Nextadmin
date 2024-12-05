import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const UserCreateDialog = ({ open, onClose }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");


  const addUser = async () => {
    const res = await fetch("/api/users", {method:"POST", body: JSON.stringify({firstname: firstname, email: email, lastname: lastname, imageUrl: "http://dummyimage.com/206x199.png/dddddd/000000"})})
    // const data = await res.json()
    // console.log(data)
    onClose(false);
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="firstname">Firstname</Label>
            <Input
            value={firstname}
            onChange={(e) => {setFirstname(e.target.value)
              console.log(e.target.value)
            }}
             id="name" defaultValue="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
            value={lastname}
            onChange={(e) => {setLastname(e.target.value)
              console.log(e.target.value)
            }}
             id="username" defaultValue="" />
          <div className="grid gap-2">
            <label htmlFor="email">email</label>
            <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)
              console.log(e.target.value)
            }}
            id="email" defaultValue="" />
            </div>   
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onClose(false)} variant="outline" type="button">
            Cancel
          </Button>
          <Button onClick={addUser} type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
