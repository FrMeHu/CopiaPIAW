import { ProductoTalla } from "src/_1casoN_N/productotalla/entities/productotalla.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @Column()
  descripcion: string

  @OneToMany(
    () => ProductoTalla,
    (productoTalla) => productoTalla.producto,
  )
  productoTallas: ProductoTalla[]
}
