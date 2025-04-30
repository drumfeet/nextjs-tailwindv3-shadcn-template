"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Button Clicked",
            description: "Testing toast notification",
          })
        }}
      >
        Button
      </Button>
    </>
  )
}
