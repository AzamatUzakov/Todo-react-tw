import React from "react"
import { GrEdit } from "react-icons/gr";
import { TiUserDeleteOutline } from "react-icons/ti";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Person from "@/types";

interface SearchFormProps {
    filter: Array<Person>;
    setDelete: (id: number) => void;

}
const UserTable: React.FC<SearchFormProps> = ({ filter, setDelete }) => {
    console.log(filter);


    return (


        < div className="overflow-y-scroll h-[100%]">
            <Table className="border border-gray-300 shadow-lg rounded-lg">

                <TableHeader className="bg-gray-100">
                    <TableRow className="text-gray-700 text-lg">
                        <TableHead className="px-4 font-semibold">Name</TableHead>
                        <TableHead className="px-4 font-semibold">Surname</TableHead>
                        <TableHead className="px-4 text-center font-semibold">Age</TableHead>
                        <TableHead className="px-4 text-center font-semibold">Phone</TableHead>
                        <TableHead className="px-4 text-center font-semibold">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {filter.map((user) => (
                        <TableRow key={user.id} className="text-[16px] text-gray-800 hover:bg-gray-50 transition-all">
                            <TableCell className="px-4 font-medium text-blue-600">{user.name}</TableCell>
                            <TableCell className="px-4">{user.surname}</TableCell>
                            <TableCell className="px-4 text-center">{user.age}</TableCell>
                            <TableCell className="px-4 text-center">{user.phone}</TableCell>
                            <TableCell className="px-4">
                                <div className="flex justify-center gap-2">
                                    <div className="edit-btn cursor-pointer p-2 rounded-full hover:bg-blue-100 transition-all">
                                        <GrEdit />
                                    </div>
                                    <div className="del-btn cursor-pointer p-2 rounded-full hover:bg-red-100 transition-all"
                                        onClick={() => setDelete(user.id)}
                                    >
                                        <TiUserDeleteOutline />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>


        </ div>

    )
}

export default UserTable;