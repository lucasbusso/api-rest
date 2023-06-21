import { Entity, Column } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({name:"user"})
export class UserEntity extends BaseEntity {
    @Column()
    username!: string;
    @Column()
    name!: string;
    @Column()
    lastName!: string;
    @Column({nullable: true})
    jopPosition!: string;
    @Column()
    numberPhone!: number;
}