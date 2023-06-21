import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @CreateDateColumn({
        name: "created_ad",
        type: "timestamp",
    })
    createdAd!: Date;
    @CreateDateColumn({
        name: "updated_ad",
        type: "timestamp",
    })
    updatedAt!: Date;
}