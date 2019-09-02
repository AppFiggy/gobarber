// Nessa pasta ficará toda a configuração da parte de upload de arquivos
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    // define o destino dos arquivos
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        // exemplo de formato que o arquivo (imagem) terá: t774vdeg3ej.png
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
