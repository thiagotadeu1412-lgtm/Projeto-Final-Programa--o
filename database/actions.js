'use server';

import { revalidatePath } from "next/cache.js";
import { Jogos } from "../../../database/tables.js";

export async function deleteJogo(formData) {
    const id = formData.get('id_jogo');
    await Jogos.destroy({
        where: {
            id_jogo: id
        }
    });
    revalidatePath('/jogos');
}