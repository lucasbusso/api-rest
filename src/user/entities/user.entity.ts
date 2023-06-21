import { Entity, Column, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity({name:"user"})
export class UserEntity extends BaseEntity {
    @Column({length: 1000})
    name!: string;

    @Column()
    lastName!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;
    
    @Column()
    city!: string;
    
    @Column()
    province!: string;
    
    @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity
}