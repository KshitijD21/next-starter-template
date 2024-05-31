import { cn } from "@/utils/cn";

type HelloWorldProps = Readonly<{
    name: string;
    className?: string;
}>;

export default function HelloWorld({ name, className }: HelloWorldProps) {
    return (
        <div className={cn(className)}>
            Hello
            {" "}
            {name}
        </div>
    );
}
