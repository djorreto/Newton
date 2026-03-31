import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center py-32">
      <Container>
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-cyan-brand/85">404</p>
        <h1 className="mt-4 font-heading text-3xl font-medium text-ice">Página no encontrada</h1>
        <p className="mt-4 max-w-md text-slate-mist">
          El recurso solicitado no existe o fue movido. Vuelva al inicio o explore cómo postular a NEWTON.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/" variant="primary">
            Volver al inicio
          </CTAButton>
          <CTAButton href="/postula" variant="secondary">
            Postula
          </CTAButton>
        </div>
      </Container>
    </div>
  );
}
