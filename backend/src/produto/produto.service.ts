import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.prismaService.produtp.create({
      data: createProdutoDto,
    });
  }

  findAll() {
    return this.prismaService.produtp.findMany();
  }

  findOne(id: number) {
    return this.prismaService.produtp.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prismaService.produtp.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.produtp.delete({
      where: { id },
    });
  }
}
