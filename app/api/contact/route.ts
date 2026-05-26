import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    if (message.length > 200) {
      return NextResponse.json(
        { error: "A mensagem deve ter no máximo 200 caracteres" },
        { status: 400 }
      )
    }

    // Enviar email via Resend
    await resend.emails.send({
      from: "Portfólio Florence <onboarding@resend.dev>",
      to: "florencemanoelescritora@gmail.com",
      replyTo: email,
      subject: `Nova mensagem de ${name} - Portfólio`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #722F37; border-bottom: 2px solid #722F37; padding-bottom: 10px;">
            Nova Mensagem do Portfólio
          </h2>
          <div style="background: #FDF8F3; padding: 20px; border-left: 4px solid #722F37; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Mensagem:</strong></p>
            <p style="margin: 10px 0 0 0; font-style: italic;">"${message}"</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Enviado através do formulário de contato do portfólio.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    )
  }
}
