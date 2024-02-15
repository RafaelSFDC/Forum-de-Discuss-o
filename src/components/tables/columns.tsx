"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { Posts } from "@/interfaces";

export const columns: ColumnDef<Posts>[] = [
  {
    accessorKey: "userImage",
    header: "Imagem",
    cell: ({ row }) => {
      return (
        <img
          src={row.getValue("userImage")}
          className="w-10 h-10 rounded-full"
        />
      );
    },
  },
  {
    accessorKey: "title",
    id: "Titulo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Título
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Usuário
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "likes",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Likes
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "Comentários",
    accessorKey: "comments",
    header: "Comentários",
    cell({ row }) {
      return row.original.comments.length;
    },
  },
  {
    id: "category",
    accessorKey: "category",
    header: "Categoria",
    cell({ row }) {
      return row.getValue("category");
    },
  },
];
