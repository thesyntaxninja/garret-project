'use client'

import {AutoCompleteHeader} from "@/components/AutoComplete/AutoCompleteHeader"
import { Input } from "@/components/ui/input"
import type { User } from '@/types'
import { useState } from "react"

type AutoCompleteProps = {
    users: User[]
}

export const AutoComplete = ({ users }: AutoCompleteProps) => {

    const [isFocused, setIsFocused] = useState(false)

    const [searchValue, setSearchValue] = useState('')

    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(searchValue.toLowerCase())
    })


    const onBlur = () => {
        setTimeout(() => {
            setIsFocused(false)
        }, 500)
    }

    return (
        <div className="w-full flex flex-col gap-y-2 border border-blue-500 p-2 rounded-md">
            <AutoCompleteHeader />
            <Input
                onFocus={()=>{setIsFocused(true)}}
                onBlur={onBlur}
                value={searchValue}
                placeholder={"Search for a user"}
                onChange={(event) => {setSearchValue(event.target.value)}}
            />

            {isFocused ? <AutoCompleteOptions users={filteredUsers} setSearchValue={setSearchValue}/> : null}
        </div>
    )
}


type AutoCompleteOptionsProps = {
    users: User[]
    setSearchValue: (value: string) => void
}

const AutoCompleteOptions = ({ users, setSearchValue }: AutoCompleteOptionsProps) => {

    return (
        <div className="flex flex-col gap-y-2">
            {users.map((user) => {
                return (
                    <div onClick={()=>{setSearchValue(user.name)}} className="p-4 border rounded-md hover:cursor-pointer" key={user.id}>{user.name}</div>
                )
            })}
        </div>
    )
}