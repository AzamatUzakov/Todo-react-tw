import React from "react"
import people from "@/util/Person"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const UserTable: React.FC = () => {
    return (

        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Surname</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead className="text-right">Phone</TableHead>
                    </TableRow>
                </TableHeader>
                {people.map((user) => (
                    <TableBody>
                        <TableRow className="text-[16px] text-blue-500 text-start">
                            <TableCell className="font-medium" >{user.name}</TableCell>
                            <TableCell>{user.surname}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell className="text-right">{user.phone}</TableCell>
                        </TableRow>
                    </TableBody>))
                }
            </Table>

        </div>

    )
}

export default UserTable;