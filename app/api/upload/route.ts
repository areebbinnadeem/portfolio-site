import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export const POST = async (req: NextRequest) => {
  try {
    const { file } = await req.json();
    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: 'new_preset',
    });

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error) {
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
  }
};

// Remove the Edge runtime configuration to use the default Node.js runtime
// export const runtime = 'edge';
