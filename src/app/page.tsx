import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <div>
     <div className={'h-screen flex items-center justify-center'}>
       <Button variant={"destructive"} size={"xl"}>
        Hello world!
       </Button>
     </div>
   </div>
  );
}
